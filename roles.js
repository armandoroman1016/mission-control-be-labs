const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("student")
    .readOwn("person")
    .updateOwn("person");

  ac.grant("manager")
    .extend("student")
    .readAny("persons");

  ac.grant("admin")
    .extend("student")
    .extend("manager")
    .updateAny("persons")
    .deleteAny("persons");

  return ac;
})();
