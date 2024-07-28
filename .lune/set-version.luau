--!native
--!optimize 2
--!strict

local fs = require("@lune/fs")
local process = require("@lune/process")
local serde = require("@lune/serde")

local wally = serde.decode("toml", fs.readFile("wally.toml"))

local lastVersion = wally.package.version
local nextVersion = process.args[1]
assert(nextVersion, "version required!\n\nusage:\n  lune run set-version -- <version>")

assert(
	string.match(nextVersion, "^[0-9]+%.[0-9]+%.[0-9]+$")
		or string.match(nextVersion, "^[0-9]+%.[0-9]+%.[0-9]+%-[%w%._]+$")
		or string.match(nextVersion, "^[0-9]+%.[0-9]+%.[0-9]+%-[%w%._]+%+[%w%._]+$")
		or string.match(nextVersion, "^[0-9]+%.[0-9]+%.[0-9]+%+[%w%._]+$"),
	"version must be a semver"
)

local function sanitizePattern(str: string)
	return string.gsub(str, "([%.%-%*%+%?%%])", "%%%1")
end

local function replaceVersion(file: string, from: string, to: string)
	fs.writeFile(file, (string.gsub(fs.readFile(file), sanitizePattern(from), to)))
end

replaceVersion("README.md", `@{lastVersion}`, `@{nextVersion}`)
replaceVersion("docs/installation.md", `@^{lastVersion}`, `@^{nextVersion}`)
replaceVersion("docs/intro.md", `@^{lastVersion}`, `@^{nextVersion}`)
replaceVersion("docs/installation.md", `@{lastVersion}`, `@{nextVersion}`)
replaceVersion("docs/intro.md", `@{lastVersion}`, `@{nextVersion}`)
replaceVersion("wally.toml", `version = "{lastVersion}"`, `version = "{nextVersion}"`)
