/**
 * Abstraksi Layanan Email Transaksional KosMatch
 *
 * Jika kredensial SMTP atau RESEND_API_KEY dikonfigurasi di environment,
 * email akan dikirimkan secara riil. Jika belum ada (misal mode dev / staging lokal),
 * modul ini mencetak URL ke server console dan mengembalikan status terkirim
 * agar alur tetap dapat diverifikasi.
 */

export interface SendResetEmailParams {
  to: string;
  resetUrl: string;
}

export async function sendPasswordResetEmail({
  to,
  resetUrl,
}: SendResetEmailParams): Promise<{ success: boolean; simulated?: boolean }> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "KosMatch Security <no-reply@kosmatch.us.ci>",
          to: [to],
          subject: "Atur Ulang Kata Sandi Akun KosMatch Anda",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #101828;">
              <h2 style="color: #184E77; margin-top: 0;">Permintaan Atur Ulang Kata Sandi</h2>
              <p>Halo,</p>
              <p>Kami menerima permintaan untuk mengatur ulang kata sandi akun KosMatch yang terhubung dengan email <strong>${to}</strong>.</p>
              <p>Tautan ini bersifat rahasia, hanya dapat digunakan <strong>satu kali</strong>, dan akan kedaluwarsa dalam <strong>15 menit</strong>:</p>
              <div style="margin: 28px 0;">
                <a href="${resetUrl}" style="background-color: #184E77; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
                  Atur Ulang Kata Sandi
                </a>
              </div>
              <p style="font-size: 0.85rem; color: #667085;">Jika Anda tidak merasa meminta pengaturan ulang kata sandi, abaikan email ini. Akun Anda tetap aman.</p>
              <hr style="border: none; border-top: 1px solid #E4E7EC; margin: 24px 0;" />
              <p style="font-size: 0.75rem; color: #98A2B3;">KosMatch — Platform Keputusan Hunian Cerdas Mahasiswa</p>
            </div>
          `,
        }),
      });

      if (response.ok) {
        return { success: true, simulated: false };
      }
      console.warn("Resend API gagal mengirim email, fallback ke log console.");
    } catch (err) {
      console.error("Gagal menghubungi layanan email:", err);
    }
  }

  // Fallback dev / staging simulasi: cetak token ke console log server
  console.info(`
=============================================================================
[KOSMATCH SECURITY] SIMULASI EMAIL RESET KATA SANDI
Tujuan      : ${to}
Tautan Reset: ${resetUrl}
Kedaluwarsa : 15 Menit (Satu kali pakai)
=============================================================================
  `);

  return { success: true, simulated: true };
}

