import "./Thanks.css";

const Thanks = ({data}) => {
    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>
                A sua descrição é muito importante, em breve você receberá um orçamento em função da descrição que você escreveu.
            </p>
            <p>Para concluir, clique no botão Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação, {data.name}.</h3>
            <p className="review-data">
                <span>Número de Personagens: </span>
                {data.review}
            </p>
            <p className="review-data">
                <span>Descrição da Ilustração: </span>
                {data.comment}
            </p>
        </div>
    );
};

export default Thanks;