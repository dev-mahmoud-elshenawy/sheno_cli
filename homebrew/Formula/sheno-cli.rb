class ShenoCli < Formula
    desc "Sheno CLI Tool"
    homepage "https://github.com/dev-mahmoud-elshenawy/sheno_cli"
    url "https://github.com/dev-mahmoud-elshenawy/sheno_cli/archive/v1.0.0.tar.gz"
    sha256 "af150f0fd264b6e53f6acee4c651c50f79fb793609098dab4591497645633b69"
    license "ISC"
  
    depends_on "node"
  
    def install
      system "npm", "install", "--prefix", buildpath
  
      bin.install "dist/cli.js" => "sheno"
    end
  
    test do
      system "#{bin}/sheno", "--version"
    end
  end