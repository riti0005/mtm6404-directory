// Function to generate the client list
function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name} <strong>$${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
  }
  
  // Function to sort the clients based on the selected property
  function order(clients, property) {
    return clients.slice().sort((a, b) => {
      if (property === 'index') {
        return a.index - b.index;
      } else if (property === 'name') {
        return a.name.localeCompare(b.name);
      } else if (property === 'balance') {
        return a.balance - b.balance;
      }
    });
  }
  
  // Calculates the sum of all the account balances that exist in the system for all clients.
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Function to search clients according to the input query by name
  function search(query) {
    const lowerQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
  }
  
  // Function to get detailed information for a certain client by index.
  function info(index) {
    return clients.find(client => client.index === index);
  }
  