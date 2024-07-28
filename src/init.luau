--!optimize 2
--!strict

local FastDefer = require(script.FastDefer)
local FastDelay = require(script.FastDelay)
local FastSpawn = require(script.FastSpawn)
local SafeThreadCancel = require(script.SafeThreadCancel)

--[=[
	Provides utilities for working with threads.

	@class ThreadUtilities
]=]
local ThreadUtilities = table.freeze({
	FastDefer = FastDefer;
	FastDelay = FastDelay;
	FastSpawn = FastSpawn;
	SafeThreadCancel = SafeThreadCancel;
})

return ThreadUtilities
