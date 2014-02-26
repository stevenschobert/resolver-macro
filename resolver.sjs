let resolver = macro {
  rule { ($func:expr, $args (,) ...) } => {
    function(resolve, reject, notify) {
      $func($args (,) ... , function(err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      })
    }
  }
}

export resolver;
