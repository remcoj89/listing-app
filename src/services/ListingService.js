// api key
const myHeaders = new Headers()
myHeaders.append('X-Api-Key', 'WP0kBtXdbw5_ZQOSrvMeL6zhVNIjE13Y')

export async function getAllListings() {
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }
  const response = await fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)
  return await response.json()
}

export async function createListing(data) {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  }
  const response = await fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)
  return await response.json()
}

export async function editListing(id, data) {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  }
  const response = fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
  return await response.json()
}

export async function uploadListingImage(id, data) {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  }
  const response = fetch(`https://api.intern.d-tt.nl/api/houses/${id}/upload`, requestOptions)
  return await response.json()
}

export async function DeleteListing(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  }
  const response = fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
  return await response.json()
}
