import {useState, useEffect} from 'react'
import Gallery from './Components/Gallery'
import Button from './Components/Button'

function App(){


  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  // send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

    useEffect(() => {
        document.title = 'Welcome to ArtWorld';
        fetch (`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
        .then (response => response.json())
        .then (resData => setData(resData))
    }, [artId])






return (
    <div>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Button handleIterate={handleIterate} />
    </div>
);
}

export default App;