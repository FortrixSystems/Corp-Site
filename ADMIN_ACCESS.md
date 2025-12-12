# Admin Panel Access

## Login Information

The admin panel is available at: `/admin`

### Test Accounts

**Administrator Account:**
- Username: `admin`
- Password: `fortrix2024`
- Role: Full admin access

**Editor Account:**
- Username: `editor`
- Password: `fortrix2024`
- Role: Content editor access

## Features

### Dashboard (`/admin`)
- Overview of pages, images, and themes
- Quick action links
- Site information display

### Content Editor (`/admin/content`)
- View and manage page content
- Edit sections and blocks
- Currently read-only (backend API needed for full editing)

### Theme Editor (`/admin/themes`)
- View all themes
- Toggle active theme
- Preview color palettes
- Currently read-only (backend API needed for full editing)

### Image Manager (`/admin/images`)
- View all image assets
- See image metadata
- Currently read-only (backend API needed for full editing)

## Security Notes

⚠️ **Important:** This is a basic authentication system for development/testing purposes.

For production use, you should:
- Implement proper password hashing
- Use secure session management (server-side)
- Add rate limiting
- Implement CSRF protection
- Use environment variables for credentials
- Consider OAuth or other authentication providers

## Coming Soon Banner

The login page displays a "Coming Soon" banner to indicate limited access during development.

