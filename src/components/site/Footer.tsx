export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-6 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} AnnexSoft Digital Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
