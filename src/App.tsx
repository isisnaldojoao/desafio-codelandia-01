import { useState } from 'react' 
import './App.css'
import Search from '../src/assets/search.svg'
import Heart from '../src/assets/heart.png'
import heartFull from '../src/assets/heart-full.png'

function App() {

  const [favorites, setFavorites] = useState([] as string[]);

  const posts=[
    {id:'1',
    data:'17 de ago, 2024',
    title:'O que é linguagem de programação? Conheça as principais',
    corpo:'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
    },
    {id:'2',
    data:'12 de jul, 2023',
    title:'GitHub agora permite fazer login sem precisar de senha',
    corpo:'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
    },
    {id:'3',
    data:'21 de jun, 2024',
    title:'Por que os hiperlinks são azuis em sua maioria?',
    corpo:'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks - uma palavra ou termo clicável que direciona o leitor.',
    },
  ];

  function handleFavoriteClick(postId:any) {
    const isFavorite = favorites.includes(postId);
    console.log(isFavorite)

    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== postId));
    } else {
      setFavorites([...favorites, postId]);
    }
  }

  return (
    <div className='main'>
      <section className='area-title'>
        <h1><span>Code</span>lândia</h1>
        <div className='area-search'>
          <div className='search'>
            <img src={Search} alt="Search Icon"/>
            <input placeholder='Pesquisar no blog'/>
          </div>
        </div>
      </section>
      <section className='area-body'>
        {posts.map((post, index) => (
          <div key={index} className='post'>
            <div className='card'>
              <div className='card-header'>
                <h2 className='data'>{post.data}</h2>
                {favorites.includes(post.id) ? (
                  <img className='icon' onClick={() => handleFavoriteClick(post.id)} src={heartFull} alt="Heart Full Icon"/>
                ) : (
                  <img className='icon' onClick={() => handleFavoriteClick(post.id)} src={Heart} alt="Heart Icon"/>
                )}
              </div>
              <h1 className='title'>{post.title}</h1>
              <p className='corpo'>{post.corpo}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
