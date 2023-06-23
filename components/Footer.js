const Footer = () => {
  const currentYear = new Date().getFullYear();
  var thisYear = currentYear;

  return (
    <footer>
      <p>&copy;{thisYear}. All Rights Reserved. </p>
    </footer>
  );
};

export default Footer;
