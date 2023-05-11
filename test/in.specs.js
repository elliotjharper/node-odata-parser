var assert = require("assert");
var parser = require("../lib");

describe("odata.parser grammar", function () {
    it("should accept in with string array", function () {
        var ast = parser.parse("$filter=_first_name in ('id-1','id-2','id-3')");
        assert.equal(ast.$filter.left.name, "_first_name");
        assert.deepEqual(ast.$filter.right.value, ["id-1", "id-2", "id-3"]);
        assert.equal(ast.$filter.right.type, "array");
    });

    it("should accept in with string array with spaces", function () {
        var ast = parser.parse(
            "$filter=_first_name in ('id-1', 'id-2', 'id-3')"
        );
        assert.equal(ast.$filter.left.name, "_first_name");
        assert.deepEqual(ast.$filter.right.value, ["id-1", "id-2", "id-3"]);
        assert.equal(ast.$filter.right.type, "array");
    });

    it("should accept in with number array", function () {
        var ast = parser.parse("$filter=_first_name in (1,2,3)");
        assert.equal(ast.$filter.left.name, "_first_name");
        assert.deepEqual(ast.$filter.right.value, [1, 2, 3]);
        assert.equal(ast.$filter.right.type, "array");
    });

    it("should accept in with number array with spaces", function () {
        var ast = parser.parse("$filter=_first_name in (1, 2, 3)");
        assert.equal(ast.$filter.left.name, "_first_name");
        assert.deepEqual(ast.$filter.right.value, [1, 2, 3]);
        assert.equal(ast.$filter.right.type, "array");
    });
});
