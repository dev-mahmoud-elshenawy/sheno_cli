class ShenoCli < Formula
    desc "Sheno CLI Tool"
    homepage "https://github.com/dev-mahmoud-elshenawy/sheno_cli"
    url "https://github.com/dev-mahmoud-elshenawy/sheno_cli/archive/v1.1.0.tar.gz"
    sha256 "0228171a2d009bfdef9ad2caaed942f9d3dafbdc5977e813080c65eb12898b6c"
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