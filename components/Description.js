const content = {
  title: 'Сколько вы можете тратить в день',
  text: [
    'Укажите зарплату и обязательные расходы, а калькулятор посчитает, сколько вы можете тратить каждый день, чтобы не пришлось занимать.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="first-of-type:mb-2" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default Description
