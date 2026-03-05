'use strict';

exports.calculate = function(req, res) {
  req.app.use(function(err, _req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  // TODO: Add operator
  var operations = {
    'add':      function(a, b) { return Number(a) + Number(b); },
    'subtract': function(a, b) { return Number(a) - Number(b); },
    'multiply': function(a, b) { return Number(a) * Number(b); },
    'divide':   function(a, b) { return Number(a) / Number(b); },
    'power':    function(a, b) { return Math.pow(Number(a), Number(b)); },
    'modulo':   function(a, b) {
      if (Number(b) === 0) {
        return null;
      }

      return Number(a) % Number(b);
    },
    'percent':  function(a, b) { return Number(a) * Number(b) / 100; },
    'sqrt':     function(a) { return Math.sqrt(Number(a)); }
  };

  if (!req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (!operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }

  function isValidOperand(value) {
    return value &&
      value.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) &&
      value.replace(/[-0-9e]/g, '').length <= 1;
  }

  if (!isValidOperand(req.query.operand1)) {
    throw new Error("Invalid operand1: " + req.query.operand1);
  }

  if (req.query.operation !== 'sqrt' && !isValidOperand(req.query.operand2)) {
    throw new Error("Invalid operand2: " + req.query.operand2);
  }

  res.json({ result: operation(req.query.operand1, req.query.operand2) });
};
