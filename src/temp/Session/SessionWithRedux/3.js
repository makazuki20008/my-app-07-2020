const Routers = (sessionInfo, checked) => (sessionInfo.checked && 
    <div>
        <Switch>
            <Route 
                exact 
                path="/"
                render={ () => <Redirect to="/projects"/> } />

            <DeverseRoute 
                exact path="/login"
                component={Login}
                authenticated={sessionInfo} />

            <LayoutRoute 
                exact 
                path="/projects" 
                component={Projeccts} 
                layout={MainLayout} 
                authenticated={sessionInfo} />

            <Route component={NotFound} />
        </Switch>
    </div>);

//Diverse Route is used for login Route 
const DeverseRoute = ({ 
    component: ContentComponent, 
    authenticated, 
    ...rest 
}) => (
    <Route 
        {...rest}
        render={ props => (authenticated.sessionInfo 
                ? (<Redirect to={{pathname: '/projects',state: { from: props.location}}} />) 
                : (<ContentComponent {...props} />)
            )}
    />
    );

    DeverseRoute.propTypes = { 
        component: PropTypes.func, 
        layout: PropTypes.func 
    };

    DeverseRoute.defaultProps = {
        component: EmptyComponent,
        layout: NoLayout
    };
    
    //LayoutRoute is used to switch main components
    const LayoutRoute = (
            { 
                component: ContentComponent, 
                layout: Layout, 
                authenticated, 
                ...rest 
            }
        ) => (<Route 
                {...rest} 
                render={props => (
                                authenticated.sessionInfo 
                                    ? ( <Layout><ContentComponent {...props} /></Layout> ) 
                                    : (<Redirect to={{pathname: '/login', state: { from: props.location }}}/> )
                            )
                    }
            />);

    LayoutRoute.propTypes = { 
        component: PropTypes.func, 
        layout: PropTypes.func
    };

    LayoutRoute.defaultProps = { 
        component: EmptyComponent, 
        layout: NoLayout 
    };
