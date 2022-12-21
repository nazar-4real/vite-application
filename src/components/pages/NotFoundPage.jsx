
const sectionStyles = {
  textAlign: 'center'
};

const titleStyles = {
  marginBottom: '20px'
};

const imageStyles = {
  display: 'block',
  maxWidth: '50%',
  margin: '0 auto'
};

const NotFoundPage = () => {
  return (
    <section className="not-found" style={sectionStyles}>
      <h1 style={titleStyles}>Oops! Page not found or not created yet</h1>
      <img
        src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
        alt=""
        style={imageStyles} />
    </section>
  )
}

export default NotFoundPage