import LineGradient from "../hooks/LineGradient"
import { motion } from 'framer-motion'

const Resume = () => {
    return (
        <section id="resume" className="pt-32 pb-16">
      {/* header */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          RESUME
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Download my resume <a href="../assets/AnaEspinoza-Resume-GT.pdf" target="_blank" className="text-yellow">here</a>.
        </p>
      </motion.div>

      {/* Lists */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
            className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-24
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <p className="font-playfair bg-dark-gray text-3xl text-center p-4 mb-4">FRONT END</p>
            <ul className="text-center text-xl">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive desing</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
            </ul>
        </motion.div>

        <motion.div
            className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-24
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <p className="font-playfair bg-dark-gray text-3xl text-center p-4 mb-4">BACK END</p>
            <ul className="text-center text-xl">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>MERN</li>
            </ul>
        </motion.div>
      </div>
    </section>
    )
}

export default Resume
