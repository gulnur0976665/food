import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <div className={scss.info}>
          <p>Ресторан доставки еды</p>
          <span></span>
          <p>Криваносова 15 а</p>
          <span></span>
          <p>0703043428</p>
          <span></span>
          <p>0555629591</p>
        </div>
        <p className={scss.copyright}>Copyright © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
