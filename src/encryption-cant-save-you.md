---
title: Encryption Cant Save You
heading: Encryption Cant Save You
summary: Understanding the limits of encryption.
layout: layout.njk
date: 2026-06-27
---

*Last updated: June 27, 2026*

## The Two Boundaries

What encryption can't save you from.

**Data in use** 
The second you unlock a drive, open a vault, or decrypt a message on screen, it's plaintext in RAM. Malware and running‑device seizures walk right past the strongest cipher.

**Lost keys** 
Forget your VeraCrypt passphrase or lose the only device that can decrypt your cloud backup, and it's gone — not "call support" gone, thermodynamically gone. It's correct behaviour.

**Metadata** 
PGP encrypts the message body. Signal protects content. Neither hides who talked to whom, when, or from where. The envelope is the tell.

---

## Layer 01 - Full‑Disk

| Platform        | Tool          | Encryption                 |
|-----------------|---------------|----------------------------|
| macOS           | FileVault     | XTS‑AES‑128 / SE           |
| Windows Pro+    | BitLocker     | XTS‑AES‑256 / TPM          |
| Windows Home    | [VeraCrypt](https://www.veracrypt.fr/)     | (not specified)            |
| Linux           | [LUKS2](https://gitlab.com/cryptsetup/cryptsetup)         | AES‑XTS / Argon2id         |
| Cross‑platform  | [VeraCrypt](https://www.veracrypt.fr/)     | AES‑256‑XTS / PBKDF2       |

The disk layer, by platform. 
All on by default on modern hardware. The catch is recovery: BitLocker and FileVault escrow keys to Microsoft and Apple unless you take control.

---

## Layer 03 - Cloud

Zero‑knowledge, two ways.

Google Drive, Dropbox, and OneDrive encrypt your files — and hold the keys. Real E2EE means the provider can't decrypt. Pick one:

**PATH A: Native E2EE provider** 
- [Proton Drive](https://proton.me/drive) (Swiss, open‑source) 
- [Tresorit](https://tresorit.com/) (enterprise, HIPAA/SOC 2) 
- [Sync.com](https://www.sync.com/) (best value) 
- Seamless UX. Trust the vendor's implementation.

*Note: Web-based E2EE requires trusting the provider to serve clean JavaScript for every login. For higher threat models, use local client apps.*

**PATH B: Encryption layer on top** 
- [Cryptomator](https://cryptomator.org/) over Drive / Dropbox 
- AES‑256‑GCM, filenames encrypted 
- Free, open‑source, audited 
- Keep your current cloud. Add zero‑knowledge.

---

## Layer 04 - Messaging

Post‑quantum messaging, ranked.

**STRONGEST** 
- **[Signal](https://signal.org/)**: Triple Ratchet (SPQR + Double Ratchet), MI‑KEM at handshake and every ratchet shipped beta.

**POST‑QUANTUM** 
- **iMessage**: PQ3 hybrid protocol, shipped Feb; drops to SMS otherwise.

**CLASSICAL ONLY** By default, the server holds the keys to your messages and groups
- **WhatsApp**: Signal Protocol for content. No PQ. 
- **[Telegram](https://telegram.org/)**: Only "Secret Chats" are end‑to‑end encrypted. Groups are not. (NOT E2EE)

---

## Layer 06 - The Keystone

06/09

Password managers: pick one of four.

1. **[Bitwarden](https://bitwarden.com/)** – Open‑source, audited, cloud‑synced. Free for unlimited devices. Argon2id optional. The default for almost everyone. 
2. **[1Password](https://1password.com/)** – Closed source, best UX. The 34‑character Secret Key means a server breach still can't crack your vault offline. 
3. **[KeePassXC](https://keepassxc.org/)** – Local‑first. No cloud. You sync the `.kdbx` file yourself. For threat models where "never trust a vendor" is baseline. 
4. **Not LastPass** – The 2022 breach is now linked to $438M in crypto (Labs, Dec 2025). Migrate out if you haven't already.

---

## Layer 07 - The Long Tail

The parts no one mentions.

**DNS** 
Unencrypted DNS leaks every domain you visit. Turn on DNS‑over‑HTTPS via [Cloudflare 1.1.1.1](https://1.1.1.1/), [Quad9](https://www.quad9.net/), or [NextDNS](https://nextdns.io/) — native on modern browsers and both mobile OSes.

**Backups** 
[Restic](https://restic.net/) and [Borg](https://www.borgbackup.org/) encrypt client‑side before upload. Neither trusts the storage backend. Your cloud backup is only as safe as the tool making it.

**Hardware tokens** 
A [YubiKey](https://www.yubico.com/) on your email and password manager kills phishing and credential‑stuffing at the source. ~$50 and a weekend.

**VPN (with a caveat)** 
VPNs shift trust from your ISP to the VPN operator. WireGuard is the modern protocol. Mullvad and IVPN are the audited picks.
