function request(url: string, data: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('post', url)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  xhr.send(data)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}

export async function bugReport(url: string, data: string) {
  return request( url, data)
}
