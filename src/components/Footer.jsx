function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer className={props.className}>
      <h3>Copyright {year} | Prasetya Ikra Priyadi</h3>
    </footer>
  );
}

export default Footer;
