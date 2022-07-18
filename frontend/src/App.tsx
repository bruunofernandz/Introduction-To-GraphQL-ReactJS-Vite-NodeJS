import { gql, useQuery } from "@apollo/client"

type User = {
  id: string;
  name: string;
}

const GET_USER = gql`
  query {
    users {
      id,
      name
    }
  }
`;


function App() {
  const { data, loading } = useQuery(GET_USER);

  if (loading) {
    <h1>Loading...</h1>
  }
 
  console.log(data);
  return (
    <div>
        {data?.users.map((user : User) => <li key={user.id} >{user.name}</li>)}
    </div>
  )
}

export default App
