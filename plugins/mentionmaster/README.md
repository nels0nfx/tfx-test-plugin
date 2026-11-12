# MentionMaster v1.0.2

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

## v1.0.2
Release version incremented so the corrected storage-key implementation can be published under a fresh Git tag. All storage keys use only supported characters: letters, numbers, dots, underscores and hyphens. This avoids the invalid-colon-key failure from v1.0.0.
