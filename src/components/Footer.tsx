const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-border text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Suyash Belhekar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
