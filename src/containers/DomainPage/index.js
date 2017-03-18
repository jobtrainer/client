import CourseGroupCard from "../../components/Cards/CourseGroupCard";

export default function DomainPage({domain}) {
    const courseElements = domain.courses.map(({id, title, description, status, imageUrl}) =>  <CourseGroupCard key={id} 
                                                                                 id={id}
                                                                                 title={title}
                                                                                 description={description}
                                                                                 status={status}></CourseGroupCard>)
    return (
        <div className="courses_container">
            {courseElements}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        domains: state.get("domains")
    };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, {
        domain: stateProps.domains.filter(curr => curr.id === stateProps.params.domainId),
    });
}

function mergeProps(st)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);