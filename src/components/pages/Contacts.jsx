

const Contacts = () => {

  const socialData = [
    {
      link: '/#',
      name: 'Facebook'
    },
    {
      link: '/#',
      name: 'Instagram'
    },
    {
      link: '/#',
      name: 'Twitter'
    },
    {
      link: '/#',
      name: 'LinkedIn'
    },
  ];

  const social = socialData.map((item, index) => {
    const { link, name } = item;

    return (
      <li
        className="social__item"
        key={index}>
        <a
          className="social__item-link"
          href={link}>
          {name}
        </a>
      </li>
    )
  });

  return (
    <section className="contacts">
      <address>
        <p>259 WAYNE AVE</p>
        <p>CLIFFSIDE PARK NJ 07010-2623</p>
        <p>USA</p>
      </address>
      <ul className="social">
        {social}
      </ul>
    </section>
  )
}

export default Contacts