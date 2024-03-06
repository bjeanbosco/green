import ButtonBlank from '@/components/Atoms/ButtonBlank'
import Link from 'next/link'
import React from 'react'

const AccreditationPage = ({ user }: any) => {
  return (
    <main className="">
      <section
        style={{
          backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-[50vh] items-end justify-center">
          <div className="text-center md:w-[80%] sm:px-4 mt-12">
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-primary" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="sm:w-[80%] text-primary capitalize">
                International Baccalaureate World School
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-4">
          <p className="w-[80%] sm:text-justify text-center">
            Green Hills Academy is proud to be an IB World School located in
            Rwanda. GHA offers the International Baccalaureate the Primary Years
            Programme for learners in Nursery 1 to Grade 5, the Middle Years
            Programme for learners in Grades 6 to 10, and the Diploma and
            Career-related Programmes for learners in Grades 11 and 12. The IB
            program prepares learners to be global citizens and gain admission
            to the best universities worldwide.
          </p>
        </div>
        <div className="flex justify-center">
        <div className="w-[80%] h-full flex flex-col gap-8 py-16">
            <p className="font-bold mb-12 text-primary">
              Through the IBDP, GHA develops learners who:
            </p>
            <div className="w-full grid md:grid-cols-3 md:gap-12 sm:gap-6">
              <div className="grid gap-4">
                <p className="">
                  Have excellent breadth and depth of knowledge
                </p>
                <p className="">Study at least two languages</p>
                <p className="">
                  Make a meaningful contribution to the world during and after
                  their education
                </p>
              </div>
              <div className="grid gap-4">
                <p className="">
                  Flourish intellectually, emotionally, ethically, and
                  physically
                </p>
                <p className="">Explore the nature of knowledge </p>
                <p className="">
                  through the programme’s unique Theory of Knowledge course
                </p>
              </div>
              <div className="grid gap-4">
                <p className="">Excel in a wide range of academic subjects</p>
                <p className="">
                  Participate in a Creativity, Activity, and Service program
                </p>
                <ButtonBlank
                  action={`https://www.ibo.org/`}
                  name="Learn more"
                  background="#018c79"
                  border="1px solid var(--color-border)"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full flex justify-center md:h-[80vh] bg-fixed bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://greenhillsacademy.rw:8081/images/accredi_wvaw7l.jpg)",
        }}
      >
        <div className="w-[80%] h-full place-items-center md:gap-12 sm:gap-8 sm:my-8 grid place-content-center">
          <div>
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-[yellow] text-center">
              Cognia International Accreditation
            </h1>
          </div>
          <p className="text-white text-center sm:text-justify">
            ** Green Hills Academy is internationally accredited with Cognia.
            International accreditation is given to independent schools that
            have demonstrated that they meet high standards, and are
            continuously seeking improvement by being data-driven and having the
            necessary strategic plans and resources in place to be successful.
            International accreditation allows universities and other schools to
            know that GHA is a reputable school with high-quality learners and
            staff.
          </p>
          <ButtonBlank
            action={`https://www.ibo.org/`}
            name="Learn more"
            background="#018c79"
            border="1px solid var(--color-border)"
            color="#fff"
          />
        </div>
      </section>
      <section
        className="text-white bg-primary flex justify-center md:py-16"
        style={{
          backgroundImage: `url(/icons/bg.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
      <div className="w-[80%] h-full flex flex-col gap-8 py-16">
          <div>
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-[yellow] text-center">
              Label France Education Accreditation
            </h1>
          </div>
          <div className="md:columns-2 columns-1 gap-12">
            <p className="text-justify pb-6">
              On July 25th, 2016, Green Hills Academy received the accreditation
              Label France Education and became the first school in Sub-Saharan
              Africa to join this international network.
            </p>
            <p className="text-justify pb-6">
              Launched in 2012, the Label France Education seal is granted to
              schools promoting French language and culture as part of their
              specific curriculum. Label France Education recognizes and rewards
              public or private schools that offer learners enhanced instruction
              in the French language while also teaching other subjects in
              French. Label France Education promotes outstanding education in
              French among learners and parents.
            </p>
            <p className="text-justify pb-6">
              Label France Education is granted by the French Ministry of
              Foreign Affairs based on the advice of an inter-ministerial
              advisory committee composed of representatives from the French
              Ministries of Foreign Affairs and Education, the Agency for French
              Education Abroad (AEFE), the French Institute (IF) and Mission
              Laïque Française, a nonprofit organization.The AEFE is in charge
              of managing the Label France Education program. Since February
              2012, 91 schools from all over the world have received the Label
              France Education seal.
            </p>
            <p className="text-justify pb-6">
              To apply for accreditation, schools must meet a set of rigorous
              criteria: A minimum of 33% of subjects must be taught in French,
              educators must be highly qualified, certified, and fluent in
              French, the school must have a strong professional development
              plan and a commitment to quality education; it must participate in
              the official language tests DELF; and must provide an environment
              that inspires an interest in French culture.
            </p>
          </div>
        </div>
      </section>
      <section
        className="flex py-16 justify-center"
        style={{
          backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="w-[80%] px-4 grid gap-4">
          <div className="flex sm:flex-wrap md:gap-48 sm:gap-8">
            <div className="md:w-1/2 grid gap-8">
              <h2 className="text-primary">What are DELF examinations?</h2>
              <p className="text-justify pb-6">
                DELF exams are internationally recognized exams which can be
                taken at GHA. The diplomas certify an individual’s French
                abilities and can be used for university entrance. GHA offers
                the DELF exams at the following
              </p>
            </div>
            <div className="md:w-1/2 grid md:gap-8 sm:gap-4">
              <p className="text-justify pb-6">
                GHA offers the DELF exams at the following two levels:
              </p>
              <div className="p-4 font-bold w-full text-center  bg-primary text-[yellow]">
                Delf Prim A2 level in Grade 6 in May
              </div>
              <div className="p-4 font-bold w-full text-center bg-primary text-[yellow]">
                Delf Junior B1 and B2 level from Grade 8 to 12 in October
              </div>
              <p className="text-justify pb-6">
                To learn more about Label France Education please see this site:{" "}
                <Link
                  href={"labelfranceducation.fr/"}
                  target="_blank"
                  className="text-primary md:text-[1.3vw] sm:text-[1.05rem]"
                >
                  labelfranceducation.fr/
                </Link>
              </p>
            </div>
          </div>
          <div className="flex sm:flex-wrap sm:mt-8 md:gap-48 sm:gap-12">
            <div className="md:w-1/2 grid md:gap-8 sm:gap-4">
              <h2 className="text-primary">LabelFrancÉducation</h2>
              <p className="text-justify pb-6">
                Un label de qualité pour un enseignement bilingue en français et
                en anglais.
              </p>
              <p className="text-justify pb-6">
                Le 25 juillet 2016, Green Hills Academy a reçu l’accréditation
                Label France Education et est devenue la première école
                d’Afrique subsaharienne à rejoindre ce réseau international.
                L’école est labellisée pour la section bilingue 50/50 de la
                première primaire à la huitième collège – Grade 1 à Grade 8.
              </p>
              <p className="text-justify pb-6">
                Lancé en 2012, le label “Label France Education” est attribué
                aux écoles promouvant la langue et la culture françaises dans le
                cadre de leurs cursus spécifiques. “Label France Education”
                reconnaît et récompense les établissements publics ou privés
                offrant aux étudiants un enseignement de qualité en français
                tout en enseignant d’autres matières en français. “Label France
                Education” promeut un enseignement d’excellence en français
                auprès des élèves et des parents.{" "}
              </p>
            </div>
            <div className="md:w-1/2 grid md:gap-8 sm:gap-4">
              <p className="text-justify pb-6">
                “Label France Education” est décerné par le ministère français
                des Affaires étrangères sur l’avis d’un comité consultatif
                interministériel composé de représentants des ministères
                français des Affaires étrangères et de l’Education, de l’Agence
                pour l’éducation française à l’étranger (AEFE), de l’institut
                français (IF) et de la Mission Laïque Française, une
                organisation à but non lucratif. L’AEFE est chargée de la
                gestion du programme Label France Education. Depuis février
                2012, 91 écoles du monde entier ont reçu le label “Label France
                Education”.
              </p>
              <p className="text-justify pb-6">
                Pour être accrédités, les écoles doivent répondre à un ensemble
                de critères rigoureux : au moins 33% des matières doivent être
                enseignées en français, les enseignants doivent être hautement
                qualifiés, certifiés et maîtriser le français, l’école doit
                avoir un plan de développement professionnel solide, un
                engagement pour une éducation de qualité ; il doit participer
                aux tests de langue officielle DELF ; et doit fournir un
                environnement qui suscite un intérêt pour la culture française.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="text-black bg-green flex h-full w-full justify-center py-8"
        style={{
          backgroundImage: `url(/icons/lightgreen3_bdlud3.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="w-[80%] py-8 grid md:gap-12 sm:gap-12">
          <div>
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-primary" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h1 className="text-primary text-center">
              Qu est ce que le DELF ?
            </h1>
          </div>
          <div className="flex justify-center sm:text-justify">
            <div className="">
              <p className="md:text-center pb-6">
                Le DELF est un diplôme officiel délivré par le ministère
                français de l’Education Nationale, pour certifier les
                compétences en français, des candidats étrangers et des Français
                originaires d’un pays non francophone et non titulaires d’un
                diplôme de l’enseignement secondaire ou supérieur public
                français. Le DELF se compose de 4 diplômes indépendants,
                correspondant aux quatre niveaux du Cadre européen de référence
                pour les langues.
              </p>
              <p className="md:text-center pb-6">
                A chaque niveau les{" "}
                <strong className="text-primary">4 compétences</strong> sont
                évaluées : compréhension orale et production orale,
                compréhension des écrits et production écrite. L’examen est
                administré par l’IFR Institut Français du Rwanda et les épreuves
                se déroulent à l’école qui est centre d’examen.
              </p>
            </div>
          </div>
          <p className="font-bold text-center text-primary">
            GHA propose chaque année, les examens du DELF aux niveaux suivants :
          </p>
          <div className="w-full flex sm:flex-wrap gap-8">
            <div className="p-4 flex flex-col items-center font-bold w-full text-center bg-primary text-white">
              <p className="mb-4">
                Delf Prim A1 en 4ème et A2 en 6ème année, en mai
              </p>
              <ButtonBlank
                name="View More →"
                action="http://www.ciep.fr/delf-prim"
                background="#018c79"
                color="#D7DE27"
              />
            </div>
            <div className="p-4 flex flex-col items-center font-bold w-full text-center bg-primary text-white">
              <p className="mb-4">
                Delf Junior B1 et B2 de la 8ème à la 12ème année en octobre
              </p>
              <ButtonBlank
                name="View More →"
                action="http://www.ciep.fr/delf-junior"
                background="#018c79"
                color="#D7DE27"
              />
            </div>
          </div>
          <div className="p-4 flex flex-col items-center font-bold w-full text-center text-primary">
              <p className="mb-4">
              Pour en savoir plus sur Label France Education, veuillez consulter
            ce site:
            </p>
          <ButtonBlank
                name="labelfranceducation.fr/"
                action="https://www.labelfranceducation.fr/"
                background="#018c79"
                color="#D7DE27"
              />
          </div>
        </div>
      </section>
    </main>
  )
}

export default AccreditationPage
