import React from 'react';
import Article from '../components/Article.js'

const articles = [
    {
        id: 1,
        title: "Jak zostać piłkarzem?",
        author: "Jan Kowalski",
        text: "Moim zdaniem najważniejszą cechą piłkarza jest ambicja. Jeżeli czytasz ten artykuł to zapewne gdzieś w tobie jest pożądanie zostania zawodowcem. Każdy z nas, odkrył w sobie tę cechę. To dzięki niej wstajesz rano i trenujesz kilka razy dziennie, pragniesz być coraz lepszy, ponieważ w głowie masz cel. Człowiek bez ambicji nie będzie w stanie trenować godzinami i zdrowo się odżywiać. Piłka nożna wymaga od każdego z nas pewnej dyscypliny i poświęceń. Jednak kiedy uda Ci się przebrnąć przez liczne próby, obiecuję Ci że czeka Cię duża kariera"

    },

    {
        id: 2,
        title: "Jak trenować jak zawodowy piłkarz?",
        author: "Jan Kowalski",
        text: "Treningi klubowe mają na celu doskonalenie zagadnięć taktycznych i rozwój techniki piłkarzy. Od czasu do czasu będziecie biegać z trenerem przygotowania fizycznego, jednak jeżeli chcesz być ponadprzeciętny, sam musisz zadbać o trening motoryczny. Piłkarz bez kondycji nie ma prawa istnieć na boisku. Piłka nożna charakteryzuje się krótkimi, intensywnymi wysiłkami. Musisz trenować wytrzymałość specyficzną poprzez formy interwałowe 15-15 / 20-20 / 30-30. Im będziesz wytrzymalszy, tym więcej treningów technicznych i taktycznych będziesz w stanie znieść. Oglądając mecz piłki nożnej od razu widać który z piłkarzy ma wytrzymałość zawodowca a który jest amatorem. Możesz zostać wypatrzony na każdym meczu który grasz, dobrze by było abyś nie wyglądał jak dziecko chore na astmę po 4 sprincie."

    },
    {
        id: 3,
        title: "Kiedy jest za późno aby zostać piłkarzem?",
        author: "Jan Kowalski",
        text: "Wielu moich podopiecznych miało wątpliwości co do zostania piłkarzem już w wieku 16 lat. Musisz wiedzieć że większość gwiazd futbolu osiąga najwięcej w wieku 29 lat. Skąd biorą się twoje wątpliwości. W życiu wszystko jest proste, wystarczy mieć dobrą formułkę. W piłce nożnej receptą na sukces jest efektywny plan treningowy, zdrowe odżywianie i profesjonalizm."

    },
]


const HomePage = () => {
    const artList = articles.map(article => (
        <Article
            key={article.id} {...article}
        />
    ))
    return (
        <div className='home'>
            {artList}


        </div>
    )
}

export default HomePage