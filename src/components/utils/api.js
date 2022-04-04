export function get_all_top() {
  return fetch('https://spotify-np-api.vercel.app/api')
  .then(res => res.json())
  .then(data => {
    return data['all-top']
  })
}