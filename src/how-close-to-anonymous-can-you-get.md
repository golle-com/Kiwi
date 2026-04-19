---
title: How close to anonymous can you get?
heading: How close to anonymous can you get?
summary: Practical steps that actually work.
layout: layout.njk
permalink: /how-close-to-anonymous-can-you-get/
---


## Level 1 - Basic (most people)
- Use [Firefox](https://www.mozilla.org/firefox/) or [Brave](https://brave.com/) browser.
	- These browsers offer stronger privacy controls and less invasive default tracking than many alternatives.
- Install [uBlock Origin](https://ublockorigin.com/) (blocks trackers and ads).
	- Blocking ad and tracking scripts removes common data collection and reduces fingerprinting surface.
- Use [DuckDuckGo](https://duckduckgo.com/) or [Startpage](https://www.startpage.com/) instead of [Google](https://www.google.com/).
	- Privacy-focused search providers reduce profiling tied to your search history and identity.
- Enable HTTPS-only mode in browser.
	- HTTPS-only mode helps prevent interception and tampering when visiting sites that still support insecure connections.
- Use a reputable VPN ([Mullvad](https://mullvad.net/) or [ProtonVPN](https://protonvpn.com/)).
	- A VPN hides your IP from websites and local networks, making direct location and ISP correlation harder.
- Disable third-party cookies in browser settings.
	- Third-party cookies are widely used for cross-site tracking; disabling them limits long-term tracking across domains.

Result: Significantly harder to track than 95% of users.

## Level 2 - Intermediate
- Use [Tor Browser](https://www.torproject.org/download/) for sensitive searches.
	- Tor routes traffic through multiple relays, masking source IP and separating activity from your home connection.
- Use [Signal](https://signal.org/) for messaging (end-to-end encrypted).
	- End-to-end encryption prevents providers and network observers from reading message content in transit.
- Use [Proton Mail](https://proton.me/mail) for email (encrypted).
	- Encrypted email services reduce plain access to stored messages and improve privacy compared with standard providers.
- Enable MAC address randomization on devices.
	- Randomizing MAC addresses makes device tracking across Wi-Fi networks less reliable over time.
- Use a privacy-hardened [Firefox](https://www.mozilla.org/firefox/) ([arkenfox user.js](https://github.com/arkenfox/user.js)).
	- Hardening disables high-risk web features and defaults that leak identifying metadata.
- Disable [WebRTC](https://webrtc.org/) to prevent IP leaks.
	- WebRTC can expose local or real IP information even when a VPN or proxy is enabled.
- Never log into personal accounts while using [Tor](https://www.torproject.org/).
	- Account logins directly link anonymous browsing sessions to your real identity.

Result: Extremely difficult to track. Journalist-level privacy.

## Level 3 - Maximum (activists/journalists)
- Use [Tails OS](https://tails.net/) from USB on an air-gapped machine.
	- Tails limits persistent traces and isolates work from your daily system and network history.
- Never use personal accounts on [Tails](https://tails.net/).
	- Personal account access creates immediate identity linkage that defeats anonymity goals.
- Use [Tor](https://www.torproject.org/) with bridges to hide Tor usage from ISP.
	- Bridges make Tor traffic harder to identify and block by network operators.
- Remove phone/devices from vicinity when working.
	- Nearby devices can leak location, identifiers, and timing signals that correlate with your activity.
- Use cash for purchases - no digital trail.
	- Cash avoids card and account records that can map transactions to your identity.
- Use dedicated anonymous hardware.
	- Separate hardware prevents cross-contamination from personal accounts, files, and device fingerprints.
- Verify all software cryptographic signatures.
	- Signature verification helps ensure software is authentic and not modified by an attacker.

Result: NSA-level adversary required to deanonymize you.

## The golden rule
- No tool protects you from yourself.
- Logging into personal accounts = game over.
- Talking about personal details = game over.
- Using the same username across platforms = game over.
- Anonymity is a practice, not just a tool.

The closer you want to get to anonymous, the more discipline it requires.
