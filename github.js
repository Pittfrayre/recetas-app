/* ============================================================
   Sincronización con el repo privado de datos.

   El token es del usuario y NUNCA sale de su teléfono: se guarda
   en localStorage y sólo viaja a api.github.com.
   ============================================================ */

const GH = {
  get cfg(){
    try {
      return {
        repo:  localStorage.getItem('gh_repo')  || '',
        token: localStorage.getItem('gh_token') || ''
      };
    } catch { return { repo:'', token:'' }; }
  },
  set(repo, token){
    try {
      localStorage.setItem('gh_repo', repo);
      if (token) localStorage.setItem('gh_token', token);
    } catch {}
  },
  get listo(){ const c = this.cfg; return !!(c.repo && c.token); },

  async api(ruta, opciones = {}){
    const { repo, token } = this.cfg;
    const r = await fetch(`https://api.github.com/repos/${repo}/contents/${ruta}`, {
      ...opciones,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(opciones.headers || {})
      }
    });
    if (!r.ok){
      const detalle = await r.text().catch(()=> '');
      throw new Error(`GitHub ${r.status}: ${detalle.slice(0,140)}`);
    }
    return r.json();
  },

  /* --- leer un JSON del repo --- */
  async leer(archivo){
    const j = await this.api(archivo);
    return { datos: JSON.parse(utf8desde64(j.content)), sha: j.sha };
  },

  /* --- escribir un JSON al repo --- */
  async escribir(archivo, datos, mensaje, sha){
    return this.api(archivo, {
      method: 'PUT',
      body: JSON.stringify({
        message: mensaje,
        content: utf8a64(JSON.stringify(datos, null, 1) + '\n'),
        ...(sha ? { sha } : {})
      })
    });
  }
};

/* --- base64 que aguanta acentos y ñ --- */
function utf8a64(texto){
  const bytes = new TextEncoder().encode(texto);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000){
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}
function utf8desde64(b64){
  const bin = atob(b64.replace(/\s/g, ''));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/* --- copia local para que la app abra sin internet --- */
const Cache = {
  guardar(clave, valor){ try { localStorage.setItem('cache_'+clave, JSON.stringify(valor)); } catch {} },
  leer(clave){
    try { const v = localStorage.getItem('cache_'+clave); return v ? JSON.parse(v) : null; }
    catch { return null; }
  }
};
