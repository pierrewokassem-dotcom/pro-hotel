import React from 'react';
import Link from 'next/link';
import ResetPasswordForm from '../../components/auth/ResetPasswordForm';

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams?.token;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-2">Réinitialiser le mot de passe</h1>
        <p className="text-sm text-gray-600 mb-4">Choisis un nouveau mot de passe pour ton compte.</p>

        <ResetPasswordForm token={token} />

        <div className="mt-4 text-center text-sm">
          <Link href="/auth/login" className="text-blue-600 hover:underline">← Retour connexion</Link>
        </div>
      </div>
    </main>
  );
}