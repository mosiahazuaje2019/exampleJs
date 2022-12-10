let text = '';

const getBitcoinPrice = async () => {
  const currency = 'bitcoin';
  const url = "https://api.coingecko.com/api/v3/coins/" + currency;
  
  const response = await fetch(url, {
    mode: 'cors',
    headers: {
      'Accepts': 'application/json',
  	}
  })

  const jsonResult = await response.json();
  
  return await jsonResult.market_data.current_price.usd;
}

async function main() {
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json =>
    json.forEach(getText)
  )
  document.getElementById("price").innerHTML = "I get this price with coingecko API Bitcoin $"+await getBitcoinPrice();
  document.getElementById("list").innerHTML = text;
}

async function getDetail(id) {
  await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  .then(response => response.json())
  .then(json => changeModalData(json))
  
}

function getText(item, index) {
  text += "<tr data-bs-toggle='modal' data-bs-target='#exampleModal'><td>"+item.id+"</td><td onClick='getDetail("+item.id+")'>"+item.title+"</td></tr>"; 
}

function changeModalData(json) {
  document.getElementById("modTitle").innerHTML = json.title;
  document.getElementById("modBody").innerHTML = json.body;
}

main() 