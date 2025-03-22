import { Experience } from './experience'
import { RoundedRetangle } from './middle-rounded-retangle'

export function Middle() {
  return (
    <div className="w-2/9 col-span-6 bg-white p-8 font-mont text-xl font-semibold text-black">
      <div className="flex flex-row gap-11 pl-4">
        <div>
          <div className="flex flex-row gap-2 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-purple-900"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>

            <h1 className="text-purple-900">Seja bem vindo!</h1>
          </div>
          <p className="ml-2 w-60 pt-4 text-justify text-xs">
            Bem-vindo! Aqui compartilho minha trajetória no estudo da engenharia
            de computação, minhas experiências de trabalho e minha atuação em
            grupos estudantis.
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-purple-900"
            >
              <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
              <path
                fill-rule="evenodd"
                d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                clip-rule="evenodd"
              />
            </svg>

            <h1 className="text-purple-900">Quem sou eu?</h1>
          </div>
          <p className="w-90 ml-2 pb-8 pr-6 pt-4 text-justify text-xs mb-8">
            Sou estudante de Engenharia de Computação no Instituto Mauá de
            Tecnologia. Tenho paixão por transformar ideias em realidade por
            meio da tecnologia e da programação. Com um perfil colaborativo e
            uma comunicação eficaz, gosto de trabalhar em equipe para enfrentar
            desafios complexos e criar soluções inovadoras.
          </p>
        </div>
      </div>
      <RoundedRetangle></RoundedRetangle>
      <Experience
        title="Dev. Community Mauá"
        text="A Dev. Community Mauá, fundada em 2021, é um grupo acadêmico do Instituto Mauá de Tecnologia e tem por objetivo o desenvolvimento e criação de soluções computacionais. Voltada aos alunos que gostam de desafios e buscando sempre trazer um contato mais eficaz com as áreas de computação, com foco em incorporar, principalmente, o trabalho em equipe e as práticas do mercado com o mundo da tecnologia e inovação."
        year_start="2021"
        year_end="2024"
        competence1="Flutter"
        competence2="Dart"
        competence3="React"
        competence4="Metodologias Ágeis"
      ></Experience>
      <Experience
        title="Vivo (Telefônica Brasil)"
        text="A Vivo faz parte de uma das maiores companhias de telecomunicações no mundo, com presença em 12 países da Europa e da América Latina. Lá estagío na área de Tecnologia da Informação, com foco no contexto de faturamento de sustentanção dos serviços de billing. Aqui, as regras de negócio fazem parte do dia a dia e a habilidade de resolver problemas é colocada ao teste a todo momento."
        year_start="2024"
        year_end="Atual"
        competence1="SQL"
        competence2="Java"
        competence3="Linux"
        competence4="Python"
      ></Experience>
    </div>
  )
}
