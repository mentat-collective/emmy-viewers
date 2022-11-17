import "./cljs_env.js";
goog.provide("goog.crypt.Sha1");
goog.require("goog.crypt.Hash");
goog.crypt.Sha1 = function() {
  goog.crypt.Sha1.base(this, "constructor");
  this.blockSize = 512 / 8;
  this.chain_ = [];
  this.buf_ = [];
  this.W_ = [];
  this.pad_ = [];
  this.pad_[0] = 128;
  for (var i = 1; i < this.blockSize; ++i) {
    this.pad_[i] = 0;
  }
  this.inbuf_ = 0;
  this.total_ = 0;
  this.reset();
};
goog.inherits(goog.crypt.Sha1, goog.crypt.Hash);
goog.crypt.Sha1.prototype.reset = function() {
  this.chain_[0] = 1732584193;
  this.chain_[1] = 4023233417;
  this.chain_[2] = 2562383102;
  this.chain_[3] = 271733878;
  this.chain_[4] = 3285377520;
  this.inbuf_ = 0;
  this.total_ = 0;
};
goog.crypt.Sha1.prototype.compress_ = function(buf, opt_offset) {
  if (!opt_offset) {
    opt_offset = 0;
  }
  var W = this.W_;
  if (typeof buf === "string") {
    for (var i = 0; i < 16; i++) {
      W[i] = buf.charCodeAt(opt_offset) << 24 | buf.charCodeAt(opt_offset + 1) << 16 | buf.charCodeAt(opt_offset + 2) << 8 | buf.charCodeAt(opt_offset + 3);
      opt_offset += 4;
    }
  } else {
    for (var i = 0; i < 16; i++) {
      W[i] = buf[opt_offset] << 24 | buf[opt_offset + 1] << 16 | buf[opt_offset + 2] << 8 | buf[opt_offset + 3];
      opt_offset += 4;
    }
  }
  for (var i = 16; i < 80; i++) {
    var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
    W[i] = (t << 1 | t >>> 31) & 4294967295;
  }
  var a = this.chain_[0];
  var b = this.chain_[1];
  var c = this.chain_[2];
  var d = this.chain_[3];
  var e = this.chain_[4];
  var f, k;
  for (var i = 0; i < 80; i++) {
    if (i < 40) {
      if (i < 20) {
        f = d ^ b & (c ^ d);
        k = 1518500249;
      } else {
        f = b ^ c ^ d;
        k = 1859775393;
      }
    } else {
      if (i < 60) {
        f = b & c | d & (b | c);
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
    }
    var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
    e = d;
    d = c;
    c = (b << 30 | b >>> 2) & 4294967295;
    b = a;
    a = t;
  }
  this.chain_[0] = this.chain_[0] + a & 4294967295;
  this.chain_[1] = this.chain_[1] + b & 4294967295;
  this.chain_[2] = this.chain_[2] + c & 4294967295;
  this.chain_[3] = this.chain_[3] + d & 4294967295;
  this.chain_[4] = this.chain_[4] + e & 4294967295;
};
goog.crypt.Sha1.prototype.update = function(bytes, opt_length) {
  if (bytes == null) {
    return;
  }
  if (opt_length === undefined) {
    opt_length = bytes.length;
  }
  var lengthMinusBlock = opt_length - this.blockSize;
  var n = 0;
  var buf = this.buf_;
  var inbuf = this.inbuf_;
  while (n < opt_length) {
    if (inbuf == 0) {
      while (n <= lengthMinusBlock) {
        this.compress_(bytes, n);
        n += this.blockSize;
      }
    }
    if (typeof bytes === "string") {
      while (n < opt_length) {
        buf[inbuf] = bytes.charCodeAt(n);
        ++inbuf;
        ++n;
        if (inbuf == this.blockSize) {
          this.compress_(buf);
          inbuf = 0;
          break;
        }
      }
    } else {
      while (n < opt_length) {
        buf[inbuf] = bytes[n];
        ++inbuf;
        ++n;
        if (inbuf == this.blockSize) {
          this.compress_(buf);
          inbuf = 0;
          break;
        }
      }
    }
  }
  this.inbuf_ = inbuf;
  this.total_ += opt_length;
};
goog.crypt.Sha1.prototype.digest = function() {
  var digest = [];
  var totalBits = this.total_ * 8;
  if (this.inbuf_ < 56) {
    this.update(this.pad_, 56 - this.inbuf_);
  } else {
    this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
  }
  for (var i = this.blockSize - 1; i >= 56; i--) {
    this.buf_[i] = totalBits & 255;
    totalBits /= 256;
  }
  this.compress_(this.buf_);
  var n = 0;
  for (var i = 0; i < 5; i++) {
    for (var j = 24; j >= 0; j -= 8) {
      digest[n] = this.chain_[i] >> j & 255;
      ++n;
    }
  }
  return digest;
};

//# sourceMappingURL=goog.crypt.sha1.js.map
