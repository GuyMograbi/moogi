import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
  test("Sample test", (done) => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    console.log("I am in a test");
    vscode.window.showInformationMessage("Start my tests.");
    setTimeout(() => {
      done();
    }, 1000);
  });
});