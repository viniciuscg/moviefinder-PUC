import Footer from '../../components/Footer/Footer'
import {useContext, useEffect, useState} from 'react'
import { api } from "../../services/api";

import { Link, useParams, useNavigate } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoSearch } from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/md"
import { BsFillCircleFill } from "react-icons/bs"
import { MdOutlineFavorite } from "react-icons/md"
import { Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import Box from '@mui/material/Box';
import Rodal from 'rodal';
import moment from 'moment/moment';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import "swiper/css";
import "swiper/css/scrollbar";
import './Resultado.css'
import {AuthContext} from "../../contexts/AuthContext.jsx";
import Cookies from 'js-cookie';
import Home from "../Home/Home.jsx";

function Resultado() {

  const { id } = useParams()
  const [visibleFavorites, setvisibleFavorites] = useState(false)
  const [starFill, setStarFill] = useState(false)
  const [recomendationMovies, setRecomendationMovies ] = useState([])
  const [movie, setMovie ] = useState({})
  const [discoverList, setDiscoverList ] = useState([])
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [favoritoLocal, setFavoritoLocal] = useState(favorito);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const authContext = useContext(AuthContext);
  const {authenticated} = authContext;
  const token = Cookies.get('moviefinder-token');
  const {userDto} = authContext;
  const {changeName} = authContext;
  const {favorito} = authContext;

  const navigate = useNavigate()

  const toHoursAndMinutes = () => {
    const totalTimeInMin = movie.runtime
    return Math.floor(totalTimeInMin / 60) + 'h' + totalTimeInMin % 60 + 'm'
  }

  let USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });

  const showModalFavorites = () => { setvisibleFavorites(true);}
  const closeModalFavorites = () => {setvisibleFavorites(false);}

  const favoriteMovie  = async () => {
    const response = await api.post('/movieFinder/favoritarFilme', movie, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return setFavoritoLocal(response.data);
  };

  const unfavoriteMovie  = async () => {
    const response = await api.get(`/movieFinder/desfavoritarFilme/${movie.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return setFavoritoLocal(response.data);
  };

  const starFillCheck = (event) =>  {
    if (event.type === 'click' && favorito) {
        setStarFill(true)
    } else if (event.type === 'click' && !favoritoLocal) {
      setFavoritoLocal(favoriteMovie())
      setStarFill(true)
    } else if (event.type === 'click' && favoritoLocal) {
      setStarFill(false)
      setFavoritoLocal(!unfavoriteMovie())
    }
  }

  const gotoDetails = async (movie) => {
    if (authenticated) {
      await authContext.isFavorite(movie);
    }
    navigate(`/Resultado/${movie.id}`);
  }

  const getMovie = async () => {
    const response = await api.get(`/movieFinder/movie/${id}`)
    const movie = response.data
    setMovie(movie)
    const genres = movie.genres.map((genre) => genre.id).join()
    if (genres) {
      getDiscoverList(genres)
    }
  }

  const getDiscoverList = async (genreIds) => {
    const response = await api.get(`/movieFinder/discover/movie?genreId=${genreIds}`)
    setDiscoverList(response.data.results)
  }

  const getRecomendationMovies = async () => {
    const response = await api.get(`/movieFinder/recommendation/list/${id}`)
    setRecomendationMovies(response.data.results)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(255, 255, 255, 0.849)',
      },
      secondary: {
        main: '#ff0000',
      },
    },
  });

  const deleteUser = async () => {
    const confirmDelete = confirm("tem certeza que deseja deletar sua conta?");
    if (confirmDelete) {
        api.delete('/movieFinder/deletarUsuario',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        authContext.logOut();
        closeModalFavorites()
        setSeverity("success");
        setMessage("Usuario deletado");
        setOpen(true)
    }
}

const updateUser = async () => {
        await api.put('/movieFinder/alterarInformacoesUsuario',
        {
            nome: newName,
            id: userDto.id,
            senha: newPassword,
            email: userDto.email,
            genero: userDto.genero,
            idade: userDto.idade,
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        closeModalFavorites()
        setSeverity("success");
        setMessage("Usuario alterado");
        setOpen(true)
        changeName(newName)
    }

  useEffect(() => {
    getRecomendationMovies()
    getMovie()
    window.scrollTo(0, 0)
  },[id])

  return (
    <div className="results-body">

      <div
        className='results-movie'
        style={{
          backgroundImage: `url(${"http://image.tmdb.org/t/p/original" + movie.backdropPath})`,
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
        }}
      >
        <div className='results-movie-header'>
          <div className='results-header-left'>
            <Link to="/Busca" > <h2> <GoSearch style={{color: "rgba(255, 255, 255, 0.849)"}}/>Pesquisar</h2> </Link>
          </div>
          <div className='results-header-center'>
            <Link to="/">
              <h1>MovieFinder</h1>
            </Link>
          </div>
          <div className="results-header-right">
            {authenticated && (<h2 onClick={showModalFavorites}>
              {userDto.nome}
            </h2>)}

            <Rodal
              visible={visibleFavorites}
              onClose={closeModalFavorites}
              showMask={true}
              closeOnEsc={true}
              closeMaskOnClick={true}
              showCloseButton={true}
              className="rodal-favorites-results"
              width={450}
              height={450}
              customStyles={{
                  background: 'linear-gradient(45deg, rgba(6,35,64,1) 24%, rgba(6,10,64,1) 49%, rgba(11,4,46,1) 68%)',
                  borderRadius: '10px',
              }}
            >
              <div className="modal-perfil">
                  <div><h1>MovieFinder</h1></div>
                  <div className="modal-perfil-results">
                      <FormControl>
                          <FormLabel>E-mail:</FormLabel>
                          <Input
                              disabled={true}
                              size="md"
                              value={userDto?.email}
                          />
                      </FormControl>
                      <FormControl>
                          <FormLabel>Nome:</FormLabel>
                          <Input
                              disabled={false}
                              size="md"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                          />
                      </FormControl>
                      <FormControl>
                          <FormLabel>Nova Senha:</FormLabel>
                          <Input
                              disabled={false}
                              size="md"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                          />
                      </FormControl>
                      <div className='modal-perfil-results-button'>
                          <Button className="modal-button-perfil" onClick={updateUser}>Atualizar</Button>
                      </div>
                  </div>
                  <Button className="modal-button-perfil" onClick={deleteUser}>Deletar</Button>
              </div>
            </Rodal>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={open}
                autoHideDuration={3000} onClose={handleClose}>
                <Alert elevation={100000000} onClose={handleClose} severity={severity} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
          </div>
        </div>
        <div className='results-movie-details'>
          <div className='results-movie-details-card'>
            <img
            src={"http://image.tmdb.org/t/p/original" + movie?.posterPath}
            alt="card"
            style={{
              width: "100%",
              height: "450px"
            }}
            />
            <div className='results-movie-details-card-streaming'>
              {movie?.providers?.results?.br?.flatrate !== null && movie?.providers?.results?.br?.flatrate[0].logoPath ?
              <img src={"https://image.tmdb.org/t/p/original/" + movie?.providers?.results?.br?.flatrate[0].logoPath} alt="plataforma" />
              : <p>?</p> }
              {authenticated && (<div className='results-movie-details-favorite'>
                <h4 className='results-movie-details-favorite-circle' onClick={ starFillCheck }>
                  {starFill || favorito ? <span><MdOutlineFavorite className='results-movie-details-favorite-icon' style={{color: "rgba(255, 0, 0, 0.596"}} /></span> :
                      <span><MdOutlineFavorite className='results-movie-details-favorite-icon' /></span>}
                </h4>
              </div>)}
              <div className='results-movie-details-card-streaming-text'>
                <p>Disponivel em</p>
                <h2>Asista agora</h2>
              </div>
            </div>
          </div>
          <div className='results-movie-details-text' >
            <div className='results-movie-details-title-subdetails'>
              <div className='results-movie-details-title'>
                <h1>{movie.title + "  " }{movie.releaseDate ? (moment(movie.releaseDate).format("YYYY")) : ''}</h1>
              </div>
              <div className='results-movie-details-subdetails'>
                <p>{movie.releaseDate ? moment(movie.releaseDate).format("DD/MM/YYYY") : ''}</p>
                <p>{movie.originalLanguage?.toUpperCase()}</p>
                <span><BsFillCircleFill /></span>
                {movie?.genres?.map((movie) => (
                  <p>{movie.name}</p>
                ))}
                <span><BsFillCircleFill /></span>
                <p>{toHoursAndMinutes()}</p>
              </div>
            </div>
            <div className='results-movie-details-rating-all'>
              <div className='results-movie-details-rating-circle'>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-flex',
                    }}
                  >
                    <div className='results-movie-details-rating'>
                      <CircularProgress
                        value={100}
                        variant="determinate"
                        sx={{
                          position: 'absolute',
                          color: 'rgba(0, 0, 0, 0.432)'
                        }}
                        size={70}
                      />
                      <CircularProgress
                        value={Math.round(movie.voteAverage * 10)}
                        variant="determinate"
                        theme={theme}
                        size={70}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                        variant="caption"
                        component="div"
                        color="rgba(255, 255, 255, 0.849)"
                        >
                          {`${Math.round(movie.voteAverage * 10)}%`}
                        </Typography>
                      </Box>
                    </div>
                  </Box>
                </ThemeProvider>
                <div className='results-movie-details-rating-text'>Avaliação <p>feita pelo</p> <p>TMDB</p></div>
              </div>
            </div>
            <div className='results-movie-details-title-subdetails'>
              <h2>Sinopse</h2>
              <p>{movie.overview}</p>
            </div>
            <div className='results-movie-details-title-subdetails'>
              <h2>Nome Diretor</h2>
              {movie?.credits?.crew?.find(crewMember => crewMember.job === "Director") ? (
                  <p>{movie.credits.crew.find(crewMember => crewMember.job === "Director").name}</p>
              ) : (
                  <p>Não há dados sobre o nome do diretor</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='content-body'>
        <div className='content-body-details'>
          <div className='content-body-details-elenco'>
            <h1>Elenco Principal</h1>
          <Swiper
            className='content-body-details-elenco-card'
            style={{
              overflowX: 'auto',
              overflowY: 'auto',
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
              },
              "@0.75": {
                slidesPerView: 4,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 8,
              },
            }}
            >
            {movie.credits?.cast?.map((actor) =>
            <SwiperSlide>
              <div className='content-body-details-elenco-card-img-name'>
                <div className='content-body-details-elenco-card-img-name-inside'>
                  {actor.profilePath ?
                  <img src={"https://image.tmdb.org/t/p/w185/" + actor?.profilePath} alt="foto ator" />
                  : <img src="https://i.mydramalist.com/23E3Of.jpg" style={{width: "185px", height: "277px"}} alt="" />
                  }
                  <p>{actor.name }</p>
                </div>
              </div>
            </SwiperSlide>
            )}
          </Swiper>
          </div>
          <div className='content-body-details-additional'>
            <div>
              <h2>Orçamento</h2>
              <p>$ {USDollar.format(movie.budget)}</p>
            </div>
            <div>
              <h2>Receita</h2>
              <p>$ {movie.revenue ? USDollar.format(movie.revenue) : ''}</p>
            </div>
            <div>
              <h2>Situação</h2>
              <p>{movie.status}</p>
            </div>
          </div>
        </div>
        {recomendationMovies?.length > 0 &&
        <div className='recommendation-movies'>
          <div className='recommendation-movies-text'>
            <h2>Filmes recomendados baseados neste filme</h2>
            <MdKeyboardArrowRight />
          </div>
          <Swiper
            loop={true}
            loopPreventsSliding={true}
            navigation={true}
            virtual
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 3,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 8,
              },
            }}
          >
          {recomendationMovies?.map((movie, index) => movie.posterPath && (
            <SwiperSlide onClick={() => gotoDetails(movie)} className="swiper-cards-slide"virtualIndex={index}>
              <MovieCard movie={movie} posterSize="200px" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        }
        <div className='recommendation-movies'>
          <div className='recommendation-movies-text'>
            <h2>Filmes do mesmo gênero</h2>
            <MdKeyboardArrowRight />
          </div>
          <Swiper
            loopPreventsSliding={true}
            navigation={true}
            virtual
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 3,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 8,
              },
            }}
          >
            {discoverList?.map(movie => movie.posterPath && (
              <SwiperSlide onClick={() => gotoDetails(movie)} className="swiper-cards-slide" >
                <MovieCard movie={movie} posterSize="200px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Resultado
