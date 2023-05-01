import { Card, Navbar } from '../components'
import avatar from '../assets/6-60071_spider-man-wallpaper-4k.jpg'
import im from '../assets/20411900.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid pt-4 bg-light">
        <div className="d-flex flex-column align-items-center">
          <Card
            avatar={avatar}
            nickname="Andhy.Ralac"
            postImage={im}
            text="Mi perfil"
          />
          <Card
            avatar={avatar}
            nickname="Andhy.Ralac"
            postImage={im}
            text="Mi perfil"
          />
          <Card
            avatar={avatar}
            nickname="Andhy.Ralac"
            postImage={im}
            text="Mi perfil"
          />
        </div>
      </main>
    </>
  )
}

export default Home
