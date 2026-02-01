
import { ShieldCheck, Lock, FileText, Info } from 'lucide-react';

export default function Privacy() {

  return (
    <div className="max-w-4xl mx-auto p-6 py-20 text-slate-800 leading-relaxed font-sans">
      <div className="flex items-center gap-4 mb-8 border-b pb-6 text-slate-900">
        <ShieldCheck className="w-12 h-12 text-cyan-600" />
        <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
      </div>

      <div className="space-y-12">
        {/* القسم الأول: Allgemeine Hinweise */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-cyan-700">
            <Info className="w-5 h-5" />
            <h2 className="text-2xl font-bold">1. Allgemeine Hinweise und Pflichtinformationen</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <h3 className="font-bold text-slate-900">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm my-6">
              <h3 className="font-bold text-slate-900 mb-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-sm mb-2 italic text-gray-500 font-medium">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="font-bold text-slate-800">
                <p className="text-lg">DSH Service GmbH</p>
                <p>Am Alten Bahnhof 11a</p>
                <p>06886 Wittenberg, Deutschland</p>
                <p className="mt-2">Telefon: +49 1522 4761498</p>
                <p>E-Mail: info@dsh-s.de</p>
              </div>
            </div>

            <h3 className="font-bold text-slate-900">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt.</p>
          </div>
        </section>

        {/* القسم الثاني: Datenerfassung */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-cyan-700">
            <Lock className="w-5 h-5" />
            <h2 className="text-2xl font-bold">2. Datenerfassung auf unserer Website</h2>
          </div>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Cookies</h3>
              <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien. Dies sind Browsertyp, Betriebssystem, Referrer URL, Hostname und Uhrzeit der Anfrage.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg text-red-700 underline">Bewerbungen (Jobs)</h3>
              <p>Auch bei Online-Bewerbungen werden Ihre personenbezogenen Daten vertraulich behandelt. Ihre Daten bleiben zum Zwecke der Abwicklung des Bewerbungsverfahrens längstens für die Dauer von 6 Monaten nach Eingang der Bewerbung bei uns gespeichert und werden danach gelöscht.</p>
            </div>
          </div>
        </section>

        {/* القسم الثالث: Plugins */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-cyan-700">
            <FileText className="w-5 h-5" />
            <h2 className="text-2xl font-bold">3. Auskunft, Sperrung, Löschung</h2>
          </div>
          <p className="text-gray-700">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
        </section>
      </div>

      <p className="mt-16 text-xs text-gray-400 border-t pt-4">
        Stand: 2026 | DSH Service GmbH
      </p>
    </div>
  );
}