import { type JSX } from "react";

// Importa o componente de cabeçalho da aplicação
import Navegacao from "../../components/Navegacao/Navegacao";
import LoginForm from "../../components/Formlogin/FormLogin";

// Componente funcional que representa a página de login
function PLogin(): JSX.Element {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Navegacao />

            {/* Renderiza o formulário de login */}
            {/* <LoginForm /> */}
            <LoginForm />
        </div>
    );
}

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default PLogin;
