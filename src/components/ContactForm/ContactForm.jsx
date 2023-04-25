const ContactForm = () => {
	const onSubmit = () => {}

	return (
		<ContactFormStyle>
			<div>
				<label htmlFor="name">Nome</label>
				<input type="text" name="name" id="name" placeholder="Seu nome" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" placeholder="Seu email" />
			</div>
			<div>
				<label htmlFor="text">Mensagem</label>
				<textarea
					name="text"
					id="text"
					cols="30"
					rows="10"
					placeholder="Sua mensagem"
				></textarea>
			</div>
		</ContactFormStyle>
	)
}

export default ContactForm
