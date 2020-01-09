import Link from 'next/link';

const LinkStyle = {
    marginRight: '1rem',
    fontSize: '1.5rem'
};

const HeaderStyle = {
    border: '0.5rem dashed pink',
    borderRadius: '10px',
    margin: '1rem',
    padding: '1rem'
};

const Header = () => (
  <div style={HeaderStyle}>
      <Link href="/">
          <a style={LinkStyle}>Home</a>
      </Link>

      <Link href="/about">
          <a style={LinkStyle}>About</a>
      </Link>
  </div>
);

export default Header;