# Email Functionality Fix Plan

## Problem Analysis

**Current State:**
- ✅ `GMAIL_USER` is working (found and resolved correctly)
- ❌ `GMAIL_APP_PASSWORD` is NOT found at runtime
- Variable in Amplify Console: `Gmail-app-password` (with hyphens)

**Root Cause:**
Environment variables with **hyphens (`-`)** are **invalid identifiers** in POSIX shells (bash, zsh, etc.). Shell variable names must follow the pattern `^[A-Za-z_][A-Za-z0-9_]*$` - hyphens are not allowed.

When AWS Amplify passes environment variables through shell contexts (build scripts, runtime), variables with hyphens cannot be accessed via:
- `env | grep` commands
- `process.env['Gmail-app-password']` in Node.js
- Standard shell variable expansion

This is why `Gmail-app-password` is not accessible even though it's set in Amplify Console.

## Solution Strategy

### Option 1: Rename Variable in Amplify Console (RECOMMENDED)
**Pros:** Clean, standard approach, follows shell naming conventions
**Cons:** Requires manual step in Amplify Console

### Option 2: Use AWS Systems Manager Parameter Store
**Pros:** More secure, supports any naming
**Cons:** Requires additional AWS setup, more complex

### Option 3: Use AWS Secrets Manager
**Pros:** Most secure, designed for secrets
**Cons:** Requires additional AWS setup, costs money, more complex

**We will proceed with Option 1** as it's the simplest and most reliable solution.

## Implementation Plan

### Step 1: Rename Variable in AWS Amplify Console
**Action Required (Manual):**
1. Go to AWS Amplify Console → Your App → Environment Variables
2. Find the variable `Gmail-app-password`
3. **Delete** it (or note the value: `faup kqpo afud ggjc`)
4. **Create a new variable** with name: `GMAIL_APP_PASSWORD` (or `Gmail_app_password` to match `Gmail_user` pattern)
5. Set the value to: `faup kqpo afud ggjc` (the app password)
6. Save changes

**Recommended naming:**
- Use `GMAIL_APP_PASSWORD` (all caps with underscores) for consistency with standard conventions
- OR use `Gmail_app_password` to match the existing `Gmail_user` pattern

### Step 2: Update amplify.yml Build Script
**Current Issue:** The script tries to find `Gmail-app-password` which cannot be accessed via shell.

**Changes Needed:**
- Remove the hyphenated variable check
- Add check for `GMAIL_APP_PASSWORD` (standard name)
- Add check for `Gmail_app_password` (if matching `Gmail_user` pattern)
- Ensure proper extraction and normalization

### Step 3: Update API Route Code
**Current State:** Code already checks for multiple variations including `process.env['Gmail-app-password']`

**Changes Needed:**
- Remove the hyphenated variable check (it will never work)
- Ensure code checks for `GMAIL_APP_PASSWORD` and `Gmail_app_password`
- Update debug output to reflect new variable names

### Step 4: Update next.config.js
**Current State:** Already checks for `process.env.GMAIL_APP_PASSWORD`

**Changes Needed:**
- No changes needed if using `GMAIL_APP_PASSWORD`
- If using `Gmail_app_password`, add fallback check

### Step 5: Update Documentation
**File:** `README.md`

**Changes Needed:**
- Update environment variable names in setup instructions
- Remove references to hyphenated variable names

## Detailed Implementation Steps

### Phase 1: Code Updates (Can be done immediately)

1. **Update `amplify.yml`:**
   - Remove `Gmail-app-password` check (lines 26-39)
   - Add checks for `GMAIL_APP_PASSWORD` and `Gmail_app_password`
   - Use same pattern as `Gmail_user` handling

2. **Update `src/app/api/contact/route.ts`:**
   - Remove `process.env['Gmail-app-password']` check (line 50)
   - Add `process.env.Gmail_app_password` check (if using that naming)
   - Update debug output to remove hyphenated variable references

3. **Update `next.config.js`:**
   - Add fallback for `Gmail_app_password` if using that naming pattern

### Phase 2: AWS Amplify Console (Manual Step)

1. Rename `Gmail-app-password` → `GMAIL_APP_PASSWORD` (or `Gmail_app_password`)
2. Set value to the app password
3. Save and trigger redeployment

### Phase 3: Verification

1. Check build logs for: `GMAIL_APP_PASSWORD found` message
2. Test contact form submission
3. Verify debug response shows: `GMAIL_APP_PASSWORD: "SET"` and `resolvedGmailPassword: "FOUND"`
4. Confirm email is received at `hello@fortrixsystems.com`

## Expected Outcome

After implementation:
- ✅ Build logs show: `GMAIL_APP_PASSWORD found`
- ✅ Runtime debug shows: `GMAIL_APP_PASSWORD: "SET"`
- ✅ Runtime debug shows: `resolvedGmailPassword: "FOUND"`
- ✅ Contact form successfully sends emails
- ✅ No more "Email service is not configured" errors

## Risk Assessment

**Low Risk:**
- Code changes are straightforward
- Variable renaming is a standard practice
- No breaking changes to existing functionality
- Easy to rollback if needed

**Mitigation:**
- Keep old variable in Amplify until new one is verified working
- Test thoroughly before removing old variable
- Can revert code changes if needed

## Timeline

1. **Code Updates:** ~10 minutes
2. **Amplify Console Update:** ~2 minutes (manual)
3. **Deployment & Testing:** ~5-10 minutes (wait for Amplify build)
4. **Verification:** ~2 minutes

**Total:** ~20-25 minutes

## Notes

- The hyphenated variable name was likely created accidentally or by copying from a form
- This is a common issue when environment variables don't follow shell naming conventions
- Once fixed, the solution will be stable and maintainable
- Consider documenting this in the README to prevent future issues
