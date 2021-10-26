import { useHistory } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import '../styles/auth.scss'

export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider).then((result) => {
      console.log(result)

      history.push('/rooms/new')
    })

  }

  return (
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImage} alt="Logo da Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form>
              <input
                type="text"
                placeholder="Digite o código da sala"
                />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>
        </main>
      </div>
  )
} 