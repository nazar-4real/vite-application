
const titleStyles = {
  fontSize: '180px',
  lineHeight: '100%',
  textAlign: 'center',
  letterSpacing: '15px',
  color: '#000',
  textShadow: '-7px 0 0 crimson, 7px 0 0 cyan',
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const Home = () => (
  <section className="home">
    <marquee>
      <h2>Welcome to this wonderful application</h2>
    </marquee>
    <h1 style={titleStyles}>
      Welcome
    </h1>
  </section >
)

export default Home