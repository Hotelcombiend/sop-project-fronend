import axios from "axios";

export async function createOrder(data) {
  const response = await fetch(`http://localhost:3003/addOrder`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
}