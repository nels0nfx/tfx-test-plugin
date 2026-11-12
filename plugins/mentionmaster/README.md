# MentionMaster v1.0.1

Automatically replies with a custom message when the configured owner is mentioned in a group.

## Commands
- `.mention set <message>` — save your response and bind it to your TurboFex identity.
- `.mention on` — enable automatic replies.
- `.mention off` — disable automatic replies.
- `.mention view` — view the saved response and status.
- `.mention cooldown <seconds>` — set per-chat/per-sender cooldown (5–3600 seconds).
- `.mention reset` — clear the configuration.

## Compatibility
Uses TurboFex message events and the documented `c.chat.isGroup`, `c.sender.id`, and `c.mentions` fields. Mention IDs are plugin-specific opaque IDs, so the plugin compares them directly without needing phone numbers.

## v1.0.1 fix
Version 1.0.0 used colons in storage keys. TurboFex only permits letters, numbers, dots, underscores and hyphens in storage keys. This caused storage operations to fail with `plugin_error`. Version 1.0.1 uses valid dotted keys.
