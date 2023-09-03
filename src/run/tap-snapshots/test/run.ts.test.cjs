/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run.ts > TAP > fail to find all named test files > must match snapshot 1`] = `
No valid test files found matching "blah.test.js"

`

exports[`test/run.ts > TAP > run some tests > must match snapshot 1`] = `
TAP version 14
1..3
# Subtest: bar.test.js
    ok 1 - bar
    1..1
ok 1 - bar.test.js # time={TIME}

# Subtest: foo.test.js
    ok 1 - foo
    1..1
ok 2 - foo.test.js # time={TIME}

# Subtest: raw.test
    ok 1 - raw
    1..1
ok 3 - raw.test # time={TIME}

# No coverage generated
# { total: 3, pass: 3 }
# time={TIME}

`

exports[`test/run.ts > TAP > run stdin only > must match snapshot 1`] = `
TAP version 14
1..1
ok 1 - this is standard input
# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > run stdin with a file > must match snapshot 1`] = `
TAP version 14
1..2
# Subtest: /dev/stdin
    1..1
    ok 1 - this is standard input
ok 1 - /dev/stdin # time={TIME}

# Subtest: env.test.js
    ok 1 - should match pattern
    1..1
ok 2 - env.test.js # time={TIME}

# { total: 2, pass: 2 }
# time={TIME}

`

exports[`test/run.ts > TAP > save test failures > fix the failure > must match snapshot 1`] = `
TAP version 14
1..1
# Subtest: failer.test.js
    ok 1 - this is fine
    1..1
ok 1 - failer.test.js # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > save test failures > save the failure > must match snapshot 1`] = `
TAP version 14
1..2
# Subtest: env.test.js
    ok 1 - should match pattern
    1..1
ok 1 - env.test.js # time={TIME}

# Subtest: failer.test.js
    not ok 1 - this is a failure
      ---
      at:
        fileName: failer.test.js
        lineNumber: 3
        columnNumber: 9
        isToplevel: true
{STACK}

      source: |2
      
              import t from 'tap'
              t.fail('this is a failure')
        --------^
      ...
    
    1..1
not ok 2 - failer.test.js # time={TIME}
  ---
  {DIAGS}
  ...

# { total: 2, pass: 1, fail: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > set test envs > must match snapshot 1`] = `
TAP version 14
1..1
# Subtest: env.test.js
    ok 1 - should match pattern
    1..1
ok 1 - env.test.js # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}

`
