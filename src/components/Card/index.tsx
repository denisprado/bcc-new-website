import Button from "@components/Button"
import SessionName from "@components/SessionName"

const Card = () => {
	return (
		<div className="card bg-primary text-primary-content">
			<div className="card-body">
				<SessionName>projetos</SessionName>
				<h2 className="card-title">2º Anuário Brasileiro da Mobilidade Elétrica – PNME</h2>
				<p>Construímos as melhores abordagens em tecnologias verdes, incluindo soluções para mobilidade sustentável e energias renováveis, e oferecemos consultoria estratégica para auxiliar na integração dessas tecnologias.</p>
				<div className="justify-end card-actions">
					<Button type="page">Ver mais</Button>
				</div>
			</div>
		</div>
	)
}

export default Card